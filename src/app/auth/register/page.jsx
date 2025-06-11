'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Building2, MapPin, Settings, CheckCircle, Eye, EyeOff } from 'lucide-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../lib/firebase/config';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

export default function ModernFarmRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    
    // Farm Information
    farmName: '',
    farmType: 'crop',
    farmSize: '',
    farmSizeUnit: 'hectares',
    establishedYear: new Date().getFullYear(),
    description: '',
    
    // Location Information
    country: 'Nigeria',
    state: '',
    city: '',
    address: '',
    coordinates: { lat: '', lng: '' },
    
    // Farm Settings
    currency: 'NGN',
    timezone: 'Africa/Lagos',
    primaryCrops: [],
    farmingMethods: [],
    seasonalPattern: 'year-round'
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { id: 1, title: 'Personal Info', icon: User, description: 'Your basic information' },
    { id: 2, title: 'Farm Details', icon: Building2, description: 'About your farm' },
    { id: 3, title: 'Location', icon: MapPin, description: 'Where is your farm' },
    { id: 4, title: 'Preferences', icon: Settings, description: 'Farm settings' }
  ];

  const cropOptions = [
    'Maize/Corn', 'Rice', 'Yam', 'Cassava', 'Cocoa', 'Oil Palm', 'Plantain', 'Tomatoes', 
    'Pepper', 'Onions', 'Beans', 'Groundnuts', 'Millet', 'Sorghum', 'Sweet Potato', 'Other'
  ];

  const farmingMethodOptions = [
    'Organic', 'Conventional', 'Integrated Pest Management', 'Precision Agriculture', 
    'Greenhouse', 'Hydroponics', 'Sustainable', 'Traditional'
  ];

  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo',
    'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
    'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba',
    'Yobe', 'Zamfara'
  ];

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
        break;
        
      case 2:
        if (!formData.farmName.trim()) newErrors.farmName = 'Farm name is required';
        if (!formData.farmSize || formData.farmSize <= 0) newErrors.farmSize = 'Farm size is required';
        break;
        
      case 3:
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        break;
        
      case 4:
        if (formData.primaryCrops.length === 0) newErrors.primaryCrops = 'Select at least one crop';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      const farmId = `farm_${userCredential.user.uid}`;
      // Set custom claims and create user document
      await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: userCredential.user.uid,
          farmId,
          ...formData
        })
      });
      console.log('User UID:', userCredential.user.uid);
      console.log('Farm ID:', farmId);

      toast.success('Account created successfully!');
      router.push(`/farm/${farmId}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };


  const toggleCrop = (crop) => {
    const current = formData.primaryCrops;
    const updated = current.includes(crop)
      ? current.filter(c => c !== crop)
      : [...current, crop];
    updateFormData('primaryCrops', updated);
  };

  const toggleMethod = (method) => {
    const current = formData.farmingMethods;
    const updated = current.includes(method)
      ? current.filter(m => m !== method)
      : [...current, method];
    updateFormData('farmingMethods', updated);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
            currentStep >= step.id 
              ? 'bg-blue-600 border-blue-600 text-white' 
              : 'border-gray-300 text-gray-400'
          }`}>
            {currentStep > step.id ? (
              <CheckCircle size={20} />
            ) : (
              <step.icon size={20} />
            )}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-20 h-1 mx-2 transition-all duration-300 ${
              currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
        <p className="text-gray-600">Tell us about yourself</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.firstName ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.lastName ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
            errors.email ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="Enter your email address"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
        <input
          type="tel"
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
            errors.phoneNumber ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="+234 XXX XXX XXXX"
          value={formData.phoneNumber}
          onChange={(e) => updateFormData('phoneNumber', e.target.value)}
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12 ${
                errors.password ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Create a strong password"
              value={formData.password}
              onChange={(e) => updateFormData('password', e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) => updateFormData('confirmPassword', e.target.value)}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>
      </div>
    </div>
  );

  const renderFarmDetails = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Farm Information</h2>
        <p className="text-gray-600">Tell us about your farm</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Farm Name</label>
        <input
          type="text"
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
            errors.farmName ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="Enter your farm name"
          value={formData.farmName}
          onChange={(e) => updateFormData('farmName', e.target.value)}
        />
        {errors.farmName && <p className="text-red-500 text-sm mt-1">{errors.farmName}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Farm Type</label>
        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          value={formData.farmType}
          onChange={(e) => updateFormData('farmType', e.target.value)}
        >
          <option value="crop">Crop Farming</option>
          <option value="livestock">Livestock</option>
          <option value="mixed">Mixed Farming</option>
          <option value="aquaculture">Aquaculture</option>
          <option value="poultry">Poultry</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Farm Size</label>
          <input
            type="number"
            min="0"
            step="0.1"
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.farmSize ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter farm size"
            value={formData.farmSize}
            onChange={(e) => updateFormData('farmSize', e.target.value)}
          />
          {errors.farmSize && <p className="text-red-500 text-sm mt-1">{errors.farmSize}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={formData.farmSizeUnit}
            onChange={(e) => updateFormData('farmSizeUnit', e.target.value)}
          >
            <option value="hectares">Hectares</option>
            <option value="acres">Acres</option>
            <option value="plots">Plots</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Established Year</label>
        <input
          type="number"
          min="1900"
          max={new Date().getFullYear()}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          value={formData.establishedYear}
          onChange={(e) => updateFormData('establishedYear', parseInt(e.target.value))}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Farm Description (Optional)</label>
        <textarea
          rows="3"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          placeholder="Brief description of your farm..."
          value={formData.description}
          onChange={(e) => updateFormData('description', e.target.value)}
        />
      </div>
    </div>
  );

  const renderLocation = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Farm Location</h2>
        <p className="text-gray-600">Where is your farm located?</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
          <select
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.state ? 'border-red-300' : 'border-gray-300'
            }`}
            value={formData.state}
            onChange={(e) => updateFormData('state', e.target.value)}
          >
            <option value="">Select State</option>
            {nigerianStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">City/Town</label>
          <input
            type="text"
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
              errors.city ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter city or town"
            value={formData.city}
            onChange={(e) => updateFormData('city', e.target.value)}
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
        <input
          type="text"
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
            errors.address ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="Enter street address"
          value={formData.address}
          onChange={(e) => updateFormData('address', e.target.value)}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Latitude (Optional)</label>
          <input
            type="number"
            step="any"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="e.g., 6.5244"
            value={formData.coordinates.lat}
            onChange={(e) => updateFormData('coordinates', { ...formData.coordinates, lat: e.target.value })}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Longitude (Optional)</label>
          <input
            type="number"
            step="any"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="e.g., 3.3792"
            value={formData.coordinates.lng}
            onChange={(e) => updateFormData('coordinates', { ...formData.coordinates, lng: e.target.value })}
          />
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-xl">
        <p className="text-sm text-blue-700">
          💡 <strong>Tip:</strong> Adding GPS coordinates helps with weather data, soil information, and location-based insights.
        </p>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Farm Preferences</h2>
        <p className="text-gray-600">Customize your farm management settings</p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Primary Crops</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {cropOptions.map(crop => (
            <label key={crop} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={formData.primaryCrops.includes(crop)}
                onChange={() => toggleCrop(crop)}
              />
              <span className="text-sm text-gray-700">{crop}</span>
            </label>
          ))}
        </div>
        {errors.primaryCrops && <p className="text-red-500 text-sm mt-1">{errors.primaryCrops}</p>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Farming Methods</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {farmingMethodOptions.map(method => (
            <label key={method} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                checked={formData.farmingMethods.includes(method)}
                onChange={() => toggleMethod(method)}
              />
              <span className="text-sm text-gray-700">{method}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={formData.currency}
            onChange={(e) => updateFormData('currency', e.target.value)}
          >
            <option value="NGN">Nigerian Naira (₦)</option>
            <option value="USD">US Dollar ($)</option>
            <option value="EUR">Euro (€)</option>
            <option value="GBP">British Pound (£)</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Seasonal Pattern</label>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={formData.seasonalPattern}
            onChange={(e) => updateFormData('seasonalPattern', e.target.value)}
          >
            <option value="year-round">Year-round Production</option>
            <option value="dry-season">Dry Season Only</option>
            <option value="rainy-season">Rainy Season Only</option>
            <option value="both-seasons">Both Seasons</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderPersonalInfo();
      case 2: return renderFarmDetails();
      case 3: return renderLocation();
      case 4: return renderPreferences();
      default: return renderPersonalInfo();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to FarmTech</h1>
          <p className="text-xl text-gray-600">Join thousands of farmers revolutionizing agriculture</p>
        </div>
        
        {renderStepIndicator()}
        
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {renderCurrentStep()}
          
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                currentStep === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>
            
            <div className="text-sm text-gray-500">
              Step {currentStep} of {steps.length}
            </div>
            
            {currentStep < steps.length ? (
              <button
                onClick={nextStep}
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all"
              >
                <span>Next</span>
                <ChevronRight size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-green-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle size={20} />
                    <span>Create Account</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}