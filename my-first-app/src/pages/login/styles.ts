import {
  StyleSheet,
  Dimensions
} from "react-native";
import { theme } from "../../global/themes";

export const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  boxTop:{
    height: Dimensions.get('window').height / 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxMid:{
    height: Dimensions.get('window').height / 4,
    width: '100%',
  },
  boxBotton:{
    height: Dimensions.get('window').height / 4,
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
    //justifyContent: 'center'
  },
  logo:{
    width: 200,
    height: 200,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 40,
  },
  lable:{
    marginLeft: 10,
    marginTop: 30,
    fontSize: 16,
    color: theme.colors.gray,
  },
  text_area:{
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    backgroundColor: theme.colors.lightGray,
    borderColor: theme.colors.lightGray,
  },
  input:{
    width: '90%',
    height: '100%',
    borderRadius: 40,
    paddingHorizontal: 10,
  },
  icon:{
    position: 'absolute',
    right: 10,
  },
  button:{
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  bt_text:{
    color: theme.colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_end:{
    marginBottom: 20,
    fontSize: 16,
    color: theme.colors.gray,
  },
  txt_create:{
    color: theme.colors.primary,
    fontWeight: 'bold',
  }
});