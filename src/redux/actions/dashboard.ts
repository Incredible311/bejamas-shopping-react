import { AppDispatch, AppThunk } from '../store';
import { actions } from '../slices/dashboard';
import TabModel from '../../utils/models/TabModel';
import request from '../../api/requests/dashboard.request';

const dashboardActions = {
  resetState: (): AppThunk => async (dispatch: AppDispatch): Promise<void> => {
    dispatch(
      actions.getInitialize()
    );
  },
  getTabs:
    (): AppThunk =>
    async (dispatch: AppDispatch): Promise<void> => {
      dispatch(
        actions.getInitialize(),
      );

      interface resultType {
        success: boolean,
        result: TabModel[]
      }

      const result: resultType = await request.getTabs();

      if (result.success === true) {
        dispatch(
          actions.setTabs({
            users: result
          })
        );
      } else {
        dispatch(
          actions.setErrors({
            errorMessage: 'An error was occured!'
          })
        );
      }
    },
};

export default dashboardActions;
