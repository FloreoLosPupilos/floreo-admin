import { getCollectionData } from '../../helpers';
import { setValidEmails } from './';

export const getValidEmails = () => {
  return async( dispatch ) => {
      const validEmails = await getCollectionData('validEmails');
      dispatch( setValidEmails(validEmails) );
  }
}


