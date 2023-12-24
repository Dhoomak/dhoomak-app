import React from 'react';
import { ScrollView } from 'react-native';

export default function DhoomakScrollView({ children, ...rest }) {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            {...rest}
        >
            {children}
        </ScrollView>
    );
}
