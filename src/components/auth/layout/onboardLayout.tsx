import Image from 'next/image';
import imagelayout from '../../../../public/images/home/agritech-robot-farming.jpg'

interface OnboardLayoutProps {
    children: React.ReactNode;
    title: string;
}

export default function OnboardLayout({ children, title }: OnboardLayoutProps) {
    return (
        <div className=' h-screen flex items-center justify-center lg:w-[1404px]lg:h-[906px]'>
            <Image src={imagelayout} alt="Onboarding Background" width={500} height={500} className="absolute lg:left-20" />
           {children}
        </div>
    )
};

