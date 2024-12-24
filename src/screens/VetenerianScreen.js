import { View, Text, ScrollView, Image, StatusBar } from 'react-native'
import React from 'react'
import { PlusCircleIcon } from 'react-native-heroicons/solid'

const VetenerianScreen = () => {
  return (
    <ScrollView className='bg-blue-200 px-0.5'>
      <View className='w-full h-64 mb-2'>
        <Image source={{ uri: 'https://media.istockphoto.com/id/1471774664/photo/veterinarian-with-a-senior-dog.webp?a=1&b=1&s=612x612&w=0&k=20&c=JWLUnNIFzF_2n-a6fZnS7vw9P_6TUB0amWYsBePsIGI=' }}
          style={{ width: '100%', height: '100%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        />
      </View>
      <View className='my-2'>
        <Text className='font-bold text-black text-center text-3xl '>
          Meet & Book Appointment
        </Text>
        <Text className='font-extrabold text-orange-500 text-center text-2xl '>
          ➕ With Our best vets ➕
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className='p-2'>
        {/* catagories start  */}
        <View className='w-40 h-32  mx-2 p-2'>
          <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1726062951898-e1959a027c06?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
            style={{ width: '100%', height: '80%', borderRadius: 50 }} />
          <Text className='text-center'>Kidney</Text>
        </View>
        <View className='w-40 h-32  mx-2 p-2'>
          <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1726104560939-313430ec08b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
            style={{ width: '100%', height: '80%', borderRadius: 50 }} />
          <Text className='text-center'>Stomach</Text>
        </View>
        <View className='w-40 h-32  mx-2 p-2'>
          <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1731673632503-33be6e64b4cb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
            style={{ width: '100%', height: '80%', borderRadius: 50, borderColor: 'gray', borderWidth: 1 }} />
          <Text className='text-center'>Lungs</Text>
        </View>

        <View className='w-40 h-32  mx-2 p-2'>
          <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1731673632543-1298fa4fd66a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
            style={{ width: '100%', height: '80%', borderRadius: 50, borderColor: 'gray', borderWidth: 1 }} />
          <Text className='text-center'>Liver</Text>
        </View>


      </ScrollView>
      {/* catagories end  */}
      {/* options  */}
      <View className='w-full h-64 my-1 p-4'>
        <Image source={{ uri: 'https://media.istockphoto.com/id/1314904278/photo/interview-of-happy-smiling-indian-hr-manager-with-latin-young-professional-and-friendly.webp?a=1&b=1&s=612x612&w=0&k=20&c=f7yKr55CIS4Lr6CpGxyrxwNWycCom6bPv-uTwccEEP0=' }}
          style={{ width: '100%', height: 210, borderRadius: 20 }}
        />
      </View>

      <View className='w-full h-64 my-1 p-4'>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1649433391719-2e784576d044?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2tpbmd8ZW58MHx8MHx8fDA%3D' }}
          style={{ width: '100%', height: 190, borderRadius: 20 }}
        />
      </View>
{/* shopbanner start  */}

<ScrollView horizontal showsHorizontalScrollIndicator={false} className='p-2'>
        {/* catagories start  */}
        <View className='w-40 h-60  mx-2 p-2'>
          <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1682269634622-248175930abd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhhcm1hY3l8ZW58MHx8MHx8fDA%3D' }}
            style={{ width: '100%', height: '80%', borderRadius: 50 }} />
          <Text className='text-center font-bold'>Pharma</Text>
        </View>
        <View className='w-40 h-60  mx-2 p-2'>
          <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1727953896325-e1bc6650076a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG9zcGl0YWx8ZW58MHx8MHx8fDA%3D' }}
            style={{ width: '100%', height: '80%', borderRadius: 50 }} />
          <Text className='text-center font-bold'>Hospital</Text>
        </View>
        <View className='w-40 h-60  mx-2 p-2'>
          <Image source={{ uri: 'https://media.istockphoto.com/id/885571364/photo/young-french-bulldog-on-the-visit-to-the-vet.webp?a=1&b=1&s=612x612&w=0&k=20&c=DGDFrlO0tZdrkIlF1AU82SxYs_7VXhCj8E8RvmufeLU=' }}
            style={{ width: '100%', height: '80%', borderRadius: 50 }} />
          <Text className='text-center font-bold'>Check up</Text>
        </View>
      </ScrollView>
<View className='w-full float-end'>

</View>
    </ScrollView>



  )
}

export default VetenerianScreen