import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'

const evListener = dynamic(() => import('./utils/index'), {
    ssr: false,
  });

export default function listener() {    

    return (
       <evListener/>
    )
}