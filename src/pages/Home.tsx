import React, { useEffect } from "react";
import { Trans } from "@lingui/macro";
import { useDispatch, useSelector } from "react-redux";
import { TodoList } from "../components/shared/TodoList";
import { getError, isLoading } from "../store/requestState/selectors";
import { ActionTypes } from "../store/actionTypes";
import { performExampleFetch } from "../store/general/actions";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(isLoading([ActionTypes.PERFORM_TEST_FETCH]));

  useEffect(() => {
    dispatch(performExampleFetch());
  }, [dispatch]);

  return (
    <div>
      <Trans render="h1">Home</Trans>

      <TodoList isLoading={isFetching} />
    </div>
  );
};

export default Home;
