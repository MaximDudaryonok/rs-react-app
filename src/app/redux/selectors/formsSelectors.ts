
import { RootState } from '../config/store';
import { Identificator } from '../slices/formsSlice';
import { ConvertedFormInputs } from '../../../shared/formTypes.ts';

export const getControllForm = (state: RootState): ConvertedFormInputs[] => {
  return state.forms.controllForm;
};

export const getUnControllForm = (state: RootState): ConvertedFormInputs[] => {
  return state.forms.unControlledForm;
};

export const getFormsIdentificator = (state: RootState): Identificator | null => {
  return state.forms.lastFormId;
};
