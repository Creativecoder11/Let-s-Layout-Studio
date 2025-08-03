import React from 'react';
import BrandSlider from './brand-slider';
import BrandOne from './brand-one';
import BrandTwo from './brand-two';
import BrandFour from './brand-four';

export default function BrandThree() {
  return (
    <div className="tp-brand-3-area pb-120">
      <div className="container container-1400">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-brand-3-slider-wrapper">
              <BrandFour/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
