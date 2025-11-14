
import React from 'react';

export const UsdaLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
    <path d="M50,2A48,48,0,1,0,98,50,48,48,0,0,0,50,2Zm0,90A42,42,0,1,1,92,50,42,42,0,0,1,50,92Z" />
    <path d="M50,12.5A37.5,37.5,0,1,0,87.5,50,37.5,37.5,0,0,0,50,12.5ZM70.2,65.6a2.5,2.5,0,0,1-3.8.9L50,53.2,33.6,66.5a2.5,2.5,0,0,1-3.8-.9L25.3,58a2.5,2.5,0,0,1,.9-3.8L42.5,42.5V25.3a2.5,2.5,0,0,1,5,0v15l2.7-2.7h10.1l2.7,2.7V25.3a2.5,2.5,0,0,1,5,0V42.5L73.8,54.2a2.5,2.5,0,0,1,.9,3.8Z" />
  </svg>
);

export const AgronaLogo: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`flex items-center justify-center bg-green-700 rounded-full ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-3/5 h-3/5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" className="opacity-0"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M17.8284 5.17157C15.8787 3.22183 13.255 2 10.5 2C4.70101 2 0 6.70101 0 12.5C0 18.299 4.70101 23 10.5 23C16.299 23 21 18.299 21 12.5C21 9.74501 19.7782 7.12132 17.8284 5.17157ZM10.5 21C5.80558 21 2 17.1944 2 12.5C2 7.80558 5.80558 4 10.5 4C12.6234 4 14.5912 4.84285 16.0711 6.32274C16.7849 5.60893 17.1354 5.48371 17.1354 5.48371C15.2862 3.63452 12.9856 2.5 10.5 2.5C5.25329 2.5 1 6.75329 1 12.5C1 18.2467 5.25329 22.5 10.5 22.5C15.7467 22.5 20 18.2467 20 12.5C20 9.51439 18.3655 7.21379 16.5163 5.48371C16.5163 5.48371 16.3911 5.13221 15.6773 5.84602C17.1571 7.32591 18 9.29373 18 11.5C18 15.6421 14.6421 19 10.5 19C6.35786 19 3 15.6421 3 11.5C3 8.21338 5.05391 5.45268 8 4.4093V7.5L13 10L8 12.5V15.5L15 11.5V8.5L10.5 6.25V4.12048C10.8306 4.04101 11.1694 4 11.5 4C12.7842 4 13.9678 4.43481 14.9082 5.17144C16.8579 7.12118 18.0801 9.74487 18.0801 12.5C18.0801 15.9372 15.5188 18.8471 12.2195 19.7486L10.5 21Z" transform="translate(1.5, 0.5)" fill="#90EE90"/>
            <path d="M8.5,12.5 C8.5,15.5228 10.9772,18 14,18 C17.0228,18 19.5,15.5228 19.5,12.5 C19.5,9.47715 17.0228,7 14,7 C13.0474,7 12.1648,7.2435 11.4009,7.66266" stroke="#32CD32" strokeWidth="1.5" fill="none"/>
        </svg>
    </div>
);

export const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

export const BusinessIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" />
    </svg>
);

export const CommunityIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a3.004 3.004 0 014.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm-9 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const PaperclipIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
    </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
