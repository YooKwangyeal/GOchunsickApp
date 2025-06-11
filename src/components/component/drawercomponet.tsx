import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const menuItems = [
  { id: 1, title: '홈', icon: '🏠' },
  { id: 2, title: '프로필', icon: '👤' },
  { id: 3, title: '설정', icon: '⚙️' },
  { id: 4, title: '도움말', icon: '❓' },
  { id: 5, title: '정보', icon: 'ℹ️' },
];

export default function DrawerContent(props: any) {
  const handleMenuPress = (menuId: number, title: string) => {
    console.log(`Selected menu: ${title}`);
    props.navigation.closeDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollView}>
        
        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => handleMenuPress(item.id, item.title)}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: 20,
  },
  character: {
    width: 80,
    height: 80,
    backgroundColor: '#FF8C00',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
    marginBottom: 10,
  },
  characterEmoji: {
    fontSize: 30,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 2,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
});