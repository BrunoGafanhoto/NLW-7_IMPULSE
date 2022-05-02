import React from "react";

import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
// Components
import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { SignInBox } from "../../components/SignInBox";
import { SendMessageForm } from "../../components/SendMessageForm";

// Style
import { styles } from "./styles";
import { useAuth } from "../../hooks/auth";
export const Home = () => {
     const { user } = useAuth()
     return (
          <KeyboardAvoidingView style={styles.container} enabled behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
               <Header />
               <MessageList />

               {user ? <SendMessageForm /> : <SignInBox />}

          </KeyboardAvoidingView>
     )
}

