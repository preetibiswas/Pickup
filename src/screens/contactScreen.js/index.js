/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import dummycontact from '../../assets/contacts.json';

export default function ContactScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterContact, setFilterContact] = useState(dummycontact);
  console.log(searchTerm);

  useEffect(() => {
    const newContact = dummycontact.filter(item =>
      item.user_display_name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilterContact(newContact);
  }, [searchTerm]);
  return (
    <View style={styles.page}>
      <TextInput
        style={styles.searchInput}
        placeholder="search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filterContact}
        renderItem={({item}) => (
          <Text style={styles.contactName}>{item.user_display_name}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.seprator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  seprator: {
    height: 2,
    backgroundColor: '#ced4da',
  },
  page: {
    padding: 15,
  },
  contactName: {
    fontSize: 17,
    marginVertical: 15,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    color: 'black',
  },
});
