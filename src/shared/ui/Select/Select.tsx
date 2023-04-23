import React, {useEffect, useState} from 'react';
import styles from './Select.module.scss';

export type SelectOption = {
    label: string;
    value: string | number;
};

type SingleSelectProps = {
    multiple?: false;
    value: SelectOption | undefined;
    onChange: (value: SelectOption | undefined) => void;
    options: SelectOption[];
};

type MultiSelectProps = {
    multiple: true;
    value: SelectOption[];
    onChange: (value: SelectOption[]) => void;
    options: SelectOption[];
};

type SelectProps = SingleSelectProps | MultiSelectProps;

export const Select = (props: SelectProps) => {
    const {
        multiple,
        onChange, options, value
    } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    function clearOptions()  {
        multiple ? onChange([]) : onChange(undefined);
    }

    function selectOption (option: SelectOption) {
        if (option !== value) onChange(option);
    }

    function isOptionSelected (option: SelectOption) {
        return option === value;
    }

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0)
    }, [isOpen]);

    return (
        <div
            className={styles.select} tabIndex={0}
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen(prev => !prev)}
        >
            <span className={styles.value}>{value?.label}</span>
            <button
                className={styles['clear-btn']}
                onClick={e => {
                    e.stopPropagation();
                    clearOptions();
                }}
            >&times;</button>
            <div className={styles.divider}/>
            <div className={styles.caret}/>
            <ul className={`${styles.options} ${isOpen? styles.show : ''}`}>
                {options.map((option, index )=> (
                    <li
                        className={`${styles.option} ${
                            isOptionSelected(option) ? styles.selected : ''
                        } ${
                            index === highlightedIndex ? styles.highlighted : ''
                        }`}
                        key={option.value}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        onClick={(e) => {
                            e.stopPropagation();
                            selectOption(option);
                            setIsOpen(false);
                        }}
                    >{option.label}</li>
                ))}
            </ul>
        </div>
    );
};
