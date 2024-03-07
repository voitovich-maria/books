import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { signUp, type User } from '../../redux/userSlice';
import { checkSignUp } from '../../utils/localStorageUtils';

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<User>({ mode: "onChange" });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: User) => {
    if (!checkSignUp(data.email)) {
      setError('email', {
        type: 'manual',
        message: 'Пользователь с таким Email уже зарегистрирован'
      });
    } else {
      dispatch(signUp(data));
      navigate('/');
    }
  };

  return (
    <main className="content container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form__title">
          Регистрация
        </h2>

        <label className="form__label">
          <input
            className="form__input"
            type="email"
            placeholder="Введите Email"
            {...register('email', {
              required: 'Заполните это поле',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Неверный формат Email'
              }
            })}
          />
          <span className="form__value">Email</span>
          <span className="form__error">{errors.email?.message}</span>
        </label>

        <label className="form__label">
          <input
            className="form__input"
            type="password"
            placeholder="Введите пароль"
            {...register('password', {
              required: 'Заполните это поле',
              minLength: {
                value: 8,
                message: 'Пароль должен содержать не менее 8 символов'
              }
            })}
          />
          <span className="form__value">Пароль</span>
          <span className="form__error">{errors.password?.message}</span>
        </label>

        <button className="btn btn--primary form__btn" type="submit" disabled={!isValid}>
          Зарегистрироваться
        </button>

        <span className="form__text">
          Уже зарегистрированы? <Link className="form__link" to={'/signin'}>Вход</Link>
        </span>
      </form>
    </main>
  );
};
