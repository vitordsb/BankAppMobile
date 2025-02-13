import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Movements({ data }: { data: any }) {
    const [showValue, setShowValue] = useState<boolean>(false);

    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => setShowValue(!showValue)}
        >
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                
                {showValue ? (
                    <Text style={data.type === 0 ? styles.value : styles.expenses}>
                        {data.type === 0 ? `R$ -${data.value}` : `R$ ${data.value}`}
                    </Text>
                ) : (  
                    <View style={styles.skeleton} />
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 14,
        backgroundColor: '#fff',
        borderColor: "#ddd",
        borderWidth: 1,
        padding: 12,
        borderRadius: 10,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: '#555',
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2ecc71',
    },
    expenses: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e74c3c',
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#bdbdbd',
        borderRadius: 8,
    },
});
