import { View, Text, ActivityIndicator } from "react-native";
import { Contato, getContatoById } from "../../services/contatos";
import React, { useEffect, useState } from "react";
import styles from "../../estilo/main";
import { useLocalSearchParams } from "expo-router";

const Detalhes: React.FC = () => {
    const { id } = useLocalSearchParams();
    const [contato, setContato] = useState<Contato | null>(null);

    useEffect(()=> {
        const carregarContato = async () => {
            const meucontato = await getContatoById(id.toString())
            setContato(meucontato)
        }
        carregarContato()
    }, [])

    return (
        <View style={styles.container}>
            (contato)? (
                <>
                <Text style = {styles.text}>{contato!.nome}</Text>
                <Text style = {styles.text}>{contato!.email}</Text>
                <Text style = {styles.text}>{contato!.telefone}</Text>
                <Text style = {styles.text}>{contato!.endereco}</Text>
                </>
            ):<ActivityIndicator size="large" color="#000ff"/>
        </View>
    )
}