import React from 'react';
import { NextPage } from 'next';
import { footerList1, footerList2, footerList3 } from '../utils/constants';

const List = ({ items, mt }: { items: string[], mt: Boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
    {items.map((item: string) => (
      <p key={item} className='text-gray-700 text-sm  hover:underline cursor-pointer' >
        {item}
      </p>
    ))}
  </div>
);

const Footer: NextPage = () => (
  
  <div className='mt-6 hidden xl:block'>
    <List items={footerList1} mt={false} />
    <List items={footerList2} mt />
    <List items={footerList3} mt />
    <p className='text-gray-800 text-sm mt-5'>© 2023 AshBook</p>
    <p className='text-gray-800 text-sm mt-5'>All Rights Reserved | 2023-2024</p>

  </div>
);

export default Footer;
