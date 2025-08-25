import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PremiumContextType {
  isPremiumUser: boolean;
  upgradeUser: () => void;
  downgradeUser: () => void;
  premiumFeatures: string[];
}

const PremiumContext = createContext<PremiumContextType | undefined>(undefined);

export const usePremium = () => {
  const context = useContext(PremiumContext);
  if (context === undefined) {
    throw new Error('usePremium must be used within a PremiumProvider');
  }
  return context;
};

interface PremiumProviderProps {
  children: ReactNode;
}

export const PremiumProvider: React.FC<PremiumProviderProps> = ({ children }) => {
  const [isPremiumUser, setIsPremiumUser] = useState(false);

  const premiumFeatures = [
    'Advanced Charts & Analytics',
    'E-commerce Components',
    'Crypto & Finance Dashboard',
    'Social Media Interface',
    'Premium UI Components',
    'Export Code Functionality',
    'Priority Support',
    'Custom Themes',
    'Advanced Animations',
    'Real-time Features'
  ];

  const upgradeUser = () => {
    setIsPremiumUser(true);
    // Here you would typically integrate with your payment system
  };

  const downgradeUser = () => {
    setIsPremiumUser(false);
  };

  const value: PremiumContextType = {
    isPremiumUser,
    upgradeUser,
    downgradeUser,
    premiumFeatures
  };

  return (
    <PremiumContext.Provider value={value}>
      {children}
    </PremiumContext.Provider>
  );
};