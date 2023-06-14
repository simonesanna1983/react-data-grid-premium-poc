import * as React from 'react';
import { DataGridPremium } from '@mui/x-data-grid-premium';
import { useDemoData } from '@mui/x-data-grid-generator';
import './style.css';

const splitClipboardPastedText = (pastedText: string) => {
  // remove the last empty line break
  const text = pastedText.replace(/\r?\n$/, '');
  return text.split(/\r\n|\n|\r/).map((row) => row.split('\t'));
};

export default function App() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 20,
    editable: true,
  });

  const initialState = {
    ...data.initialState,
    columns: {
      columnVisibilityModel: {
        id: false,
        desk: false,
      },
    },
  };

  return (
    <div style={{ height: 900, width: '100%' }}>
      <DataGridPremium
        {...data}
        initialState={initialState}
        checkboxSelection
        disableRowSelectionOnClick
        unstable_cellSelection
        experimentalFeatures={{ clipboardPaste: true }}
        unstable_ignoreValueFormatterDuringExport
        unstable_splitClipboardPastedText={splitClipboardPastedText}
      />
    </div>
  );
}
