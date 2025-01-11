import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Dashboard = () => {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='w-[95%] min-h-[95vh] px-4 my-6 self-center'>
          <Text className='font-pregular text-2xl text-secondary font-psemibold'>Dashboard</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Dashboard