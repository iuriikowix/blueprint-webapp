import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MiniCards } from '../../../src/components/mini-cards/mini-cards';

export default createBoard({
    name: 'Mini Panels - Warning State ',
    Board: () => <MiniCards content="Aliquam imperdiet lacus quam, imperdiet fermentum lectus pretium vitae.                      Curabitur quis porttitor lorem, sed porttitor erat." progressBarIntent="warning" spinnerIntent="warning" switchDisabledState={true} calloutIntet="warning" />,
    environmentProps: {
        canvasWidth: 600,
        windowHeight: 800,
    }
});
