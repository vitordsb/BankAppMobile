import { Text, View, StyleSheet, FlatList } from "react-native";
import { Header } from "../../components/Header";
import Balance from "@/src/components/Balance";
import Movements from "@/src/components/Movements";
import Actions from "@/src/components/actions";

const list = [
    {
        id: '1',
        label: 'Desenvolvimento de site',
        value: 100,
        date: '13/01/2022',
        type: 0,
    },
    {
        id: '2',
        label: 'Desenvolvimento de site',
        value: 100,
        date: '13/01/2022',
        type: 1,
    }

]

export function Home() {
    return (
        <View style={styles.container}>
            <Header name="Vitor de Souza" />
            <Balance saldo={2000} gastos={500} />
            <Actions/>
            <Text style={styles.title}>Ultimas movimentações</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Movements data={item}/>}
                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 14,
        marginBottom: 14,
        marginLeft: 14,
    },

    list: {
        marginStart: 14,
        marginEnd: 14,
    }
});
