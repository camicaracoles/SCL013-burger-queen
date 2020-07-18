
import { auth } from '../firebase-Config';


export const logout = async () => {
       try {
      await auth.signOut();
            console.log("cerro")
      localStorage.clear();
      return true;
    } catch(error) {
      console.log("Ocurrió un error: ", error);
      return false;
    }
  }
