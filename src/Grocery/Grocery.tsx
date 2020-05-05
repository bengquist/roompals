import React from 'react';
import {Text} from 'react-native';
import {useUsersQuery} from 'src/generated/graphql';

interface GroceryProps {}

const Grocery: React.FC<GroceryProps> = ({}) => {
  const {error, data, loading} = useUsersQuery();

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>{error}</Text>;

  return <Text>{JSON.stringify(data?.users)}</Text>;
};

export default Grocery;
