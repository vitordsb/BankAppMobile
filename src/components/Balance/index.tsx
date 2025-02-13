import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Balance({ saldo, gastos }: { saldo: number, gastos: number }) {
 return (
     <View style={styles.container}>
         <View>
             <Text style={styles.itemTitle}>Entradas</Text>
             <View style={styles.content}>
                 <Text style={styles.currencySymbol}>R$</Text>
                 <Text style={styles.balance}>{saldo.toFixed(2).replace('.', ',')}</Text>
             </View>
         </View>

         <View>
             <Text style={styles.itemTitle}>Despesas</Text>
             <View style={styles.content}>
                 <Text style={styles.currencySymbol}>R$</Text>
                 <Text style={styles.expenses }>-{gastos.toFixed(2).replace('.', ',')}</Text>
             </View>
         </View>
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: '#ddd',
        borderWidth: 1,
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 18,
        marginEnd: 18,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },

    itemTitle: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    currencySymbol: {
        color: '#dadada',
        marginRight: 6,
    },
    balance: {
        fontSize: 22,
        color: '#02c505',
    },
    expenses: {
        fontSize: 22,
        color: '#e83f5b',
    }
    
});