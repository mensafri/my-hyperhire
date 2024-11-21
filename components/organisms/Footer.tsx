import React from 'react';
import InfoFooter from '../atoms/InfoFooter';
import ServicesSection from '../molecules/ServicesSection';
import InfoTable from '../atoms/InfoTable';

const Footer = () => {
  return (
    <div className="bg-white px-6 sm:px-12 lg:px-32 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="">
          <InfoFooter />
        </div>
        <div className="">
          <ServicesSection />
        </div>
      </div>
      <div className="mt-8">
        <InfoTable />
      </div>
      <div className="mt-6 ml-6 text-start text-sm text-gray-600">
        © 2023 <span className="text-gray-800">Hyperhire</span>
      </div>
    </div>
  );
};

export default Footer;
