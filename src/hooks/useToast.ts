import Toast from 'react-native-toast-message';

const useToast = () => {
  const showToast = (type: TOAST_TYPE, text1: string) => {
    Toast.show({
      type,
      text1: text1,
    });
  };

  return {showToast};
};

export default useToast;

export enum TOAST_TYPE {
  SUCCESS = 'success',
  ERROR = 'error',
}
