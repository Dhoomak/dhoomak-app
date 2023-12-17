import React from 'react';
import { FlatList } from 'react-native';

export default function DhoomakFlatlist({ ...rest }) {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            
            {...rest}
        />
    );
}
