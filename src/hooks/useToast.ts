import Toast from 'react-native-toast-message';

const useToast = () => {
  const showToast = (type: string, text1: string) => {
    Toast.show({
      type,
      text1: text1,
    });
  };

  return {showToast};
};

export default useToast;
