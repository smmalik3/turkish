import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className="w-full bg-gray-800 p-4 shadow-lg fixed bottom-0 z-50">
      <div className="flex justify-between items-center text-white text-sm">
        <p>&copy; 2025 Salman Malik</p>
        {/* {isMobile ? (
          <a
            href="https://www.buymeacoffee.com/salmanmalik1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img
              src="/images/coffee.png"
              alt="Buy Me A Coffee"
              className="h-6 w-6"
            />
          </a>
        ) : ( */}
          <div id="bmc-widget-container">
            <script
              data-name="BMC-Widget"
              data-cfasync="false"
              src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
              data-id="salmanmalik1"
              data-description="Support me on Buy me a coffee!"
              data-message="Consider buying me a coffee!"
              data-color="#FF5F5F"
              data-position="Right"
              data-x_margin="18"
              data-y_margin="18"
            ></script>
          </div>
        {/* )} */}
      </div>
    </footer>
  );
};

export default Footer;