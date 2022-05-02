import React, { ReactNode } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import LogoSvg from "../../assets/logo.svg";
import { UserPhoto } from '../UserPhoto'
import { useAuth } from '../../hooks/auth';


export function Header() {

     const { user, signOut } = useAuth();

     return (
          <View style={styles.container}>
               <LogoSvg width={150} />

               <View style={styles.logoutButton}>
                    <TouchableOpacity onPress={signOut}>
                         {user &&<Text style={styles.logoutText}>Sair</Text> }
                    </TouchableOpacity>
                    <UserPhoto imageUri={user?.avatar_url} sizes='NORMAL' />
               </View>

          </View>
     );
}
