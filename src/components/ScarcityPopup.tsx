import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ScarcityPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-sm mx-auto">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-center text-lg font-semibold text-red-600 mb-4">Limited Availability</h2>
        <p className="text-center text-gray-900">
          We onboard only 8 new clients per month to maintain service quality.
        </p>
      </div>
    </div>
  );
};

export default ScarcityPopup;
