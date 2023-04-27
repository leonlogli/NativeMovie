import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const TopMenu = () => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      height: 52,
      gap: 16,
    }}
  >
    <Text
      style={{
        color: '#ED6707',
        fontWeight: '600',
        fontSize: 20,
      }}
    >
      Native Movie
    </Text>

    <View
      style={{
        flexDirection: 'row',
        gap: 16,
        flex: 1,
        justifyContent: 'space-evenly',
      }}
    >
      <TouchableOpacity
        style={{
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 30,
          backgroundColor: 'rgba(255,255,255,0.2)',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '600' }}>Live</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 30,
          backgroundColor: 'rgba(255,255,255,0.2)',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '600' }}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 30,
          backgroundColor: 'rgba(255,255,255,0.2)',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '600' }}>Series</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity
      style={{
        backgroundColor: 'rgba(255,255,255,0.2)',
        width: 40,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1615579586457-372d770be858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=56&q=80',
        }}
        style={{ width: 32, height: 32, borderRadius: 32 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  </View>
);

export default TopMenu;
