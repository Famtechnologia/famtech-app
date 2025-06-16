// src/components/ui/SleekModal.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Img from 'next/image';

// IMPORTANT: IMPORT TeamMember from its source (TeamMemberCard.tsx)
import { TeamMember } from '@/components/section/TeamMemberCard'; 

interface SleekModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}

const SleekModal: React.FC<SleekModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose, closeOnEscape]);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.focus();
        }
      }, 100);

      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-[95vw] max-h-[95vh]'
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center p-4
        bg-black/60 backdrop-blur-sm
        transition-all duration-300 ease-out
        ${isOpen ? 'opacity-100' : 'opacity-0'}
      `}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className={`
          relative w-full ${sizeClasses[size]}
          bg-white/95 backdrop-blur-xl
          rounded-2xl shadow-2xl
          transform transition-all duration-300 ease-out
          ${isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-4 opacity-0'}
          border border-white/20
          max-h-[90vh] overflow-hidden
          ${className}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 p-[1px]">
          <div className="w-full h-full bg-white/95 backdrop-blur-xl rounded-2xl" />
        </div>

        <div className="relative z-10">
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-200/50">
              {title && (
                <h2 
                  id="modal-title" 
                  className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-emerald-700 bg-clip-text text-transparent"
                >
                  {title}
                </h2>
              )}
              
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="
                    p-2 rounded-full 
                    bg-slate-100/50 hover:bg-red-100/50
                    text-slate-600 hover:text-red-600
                    transition-all duration-200
                    hover:scale-110 focus:scale-110
                    focus:outline-none focus:ring-2 focus:ring-red-500/20
                    group
                  "
                  aria-label="Close modal"
                >
                  <svg 
                    className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}

          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {children}
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-xl transform translate-x-16 -translate-y-16 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/10 to-purple-400/10 rounded-full blur-xl transform -translate-x-12 translate-y-12 animate-pulse animation-delay-1000" />
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default SleekModal;

export const TeamMemberModal: React.FC<{
  member: TeamMember; // Type is correctly set to TeamMember
  isOpen: boolean;
  onClose: () => void;
}> = ({ member, isOpen, onClose }) => {
  if (!member) return null;

  return (
    <SleekModal
      isOpen={isOpen}
      onClose={onClose}
      title="Team Member"
      size="lg"
      className="font-sans"
    >
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0">
            <div className="relative">
              <Img
                src={member.imageUrl}
                alt={member.name}
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-transparent" />
            </div>
          </div>
          
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-1">
                {member.name}
              </h3>
              <p className="text-lg font-medium text-emerald-600 mb-3">
                {member.title}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {member.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                Leadership
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Innovation
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Strategy
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            About {member.name.split(' ')[0]}
          </h4>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-700 leading-relaxed text-justify">
              {member.fullDescription}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-6 border border-emerald-100">
          <h5 className="font-semibold text-slate-800 mb-3">Connect with {member.name.split(' ')[0]}</h5>
          <div className="flex gap-3">
            {/* Removed conditional render: Button will always show */}
            <a
              href={`mailto:${member.email || ''}`} // Provide empty string if email is undefined
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Email
            </a>
            {/* Removed conditional render: Button will always show */}
            <a
              href={member.linkedinUrl || '#'} // Provide '#' if linkedinUrl is undefined
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </SleekModal>
  );
};