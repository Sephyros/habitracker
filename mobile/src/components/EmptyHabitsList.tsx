import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'
export function EmptyHabitsList() {
  const { navigate } = useNavigation()
  return (
    <>
      <Text className='text-zinc-400 text-base'    >
        Você ainda não possui nenhum hábito para monitorar.
      </Text>
      <Text
        className='text-violet-400 text-base underline active:text-violet-500'
        onPress={() => navigate('new')}>
        Cadastre um novo hábito aqui!
      </Text>
    </>
  )
}