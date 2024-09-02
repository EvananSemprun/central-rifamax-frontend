import React from 'react';
import QRCode from 'qrcode-generator';
import { Style } from '@react-pdf/types/style'; 
import { Svg, Path } from '@react-pdf/renderer'; 
import { IQrGenerator } from '@interfaces/index';

function QrGenerator({ value, type, style }: IQrGenerator) {
  const qr = QRCode(0, 'H');
  qr.addData(value);
  qr.make();

  const size = qr.getModuleCount() * 4;
  const cellSize = size / qr.getModuleCount();
  let path = '';
  for (let rowIndex = 0; rowIndex < qr.getModuleCount(); rowIndex++) {
    for (let cellIndex = 0; cellIndex < qr.getModuleCount(); cellIndex++) {
      if (qr.isDark(rowIndex, cellIndex)) {
        path += `M${cellIndex * cellSize},${rowIndex * cellSize}`;
        path += `h${cellSize} v${cellSize} h-${cellSize} v-${cellSize} `;
      }
    }
  }

  return (
    type === 'pdf' ? (
      <Svg viewBox={`0 0 ${size} ${size}`} style={style as Style}>
        <Path d={path} fill="#000" />
      </Svg>
    ) : (
      <svg viewBox={`0 0 ${size} ${size}`} style={style as React.CSSProperties}>
        <path d={path} fill="#000" />
      </svg>
    )
  )
}

export default QrGenerator;