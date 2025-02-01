import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

interface CheckboxItem {
  id: string;
  checked: boolean;
  label: string;
  img?: string;
}

interface CheckboxListProps {
  allItems: CheckboxItem[];
  // onCheckboxItemChange?: (id: string, checked: boolean) => void;
  setSelectedItems: (ids: string[]) => void;
  selectAllButton?: boolean; // undefined => false
}

const CheckboxList: React.FC<CheckboxListProps> = ({ allItems, setSelectedItems, selectAllButton }) => {
  const selectedItems = allItems.filter(item => item.checked).map(item => item.id);
  // console.log(selectedItems);
  const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: id, checked } = event.target;
    setSelectedItems(checked ? [...selectedItems, id] : selectedItems.filter((itemId) => itemId !== id))
  };

  const selectOrDeselectAll = () => {
    if (selectedItems.length === allItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(allItems.map(item => item.id));
    }
  }

  return (
    <div>
      {selectAllButton && (<Button variant="primary" onClick={selectOrDeselectAll}>
        Select / Deselect All
      </Button>)
      }
      {allItems.map((item) => (
        <Form.Check key={item.id}>
          <Form.Check.Label>
            {item.img && (
              <img
                src={item.img}
                alt={item.label}
              // style={{ marginRight: '8px', width: '20px', height: '20px' }}
              />
            )}
            {item.label}
            <Form.Check.Input
              type="checkbox"
              name={item.id}
              checked={item.checked}
              onChange={(e) => onCheckboxChange(e)}
            />
          </Form.Check.Label>
        </Form.Check>
      ))}
    </div>
  );
};

export type { CheckboxItem }
export default CheckboxList;
