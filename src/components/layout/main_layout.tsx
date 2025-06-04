import Header from './header'
import Footer from './footer'
import React from 'react'
import styles from '../../../assets/css/styles'; 
import View from 'react-native';


const MainLayout = (prop : {children : React.ReactNode}) => {
    return (
        <>
            <Header />
                <main style={styles.container}>
                    {prop.children}
                </main>
            <Footer />
        </>
    )
}

export default MainLayout;

