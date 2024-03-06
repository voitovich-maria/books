import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { signIn, type User } from '../../redux/userSlice';
import { checkSignInEmail, checkSignInPassword } from '../../utils/localStorageUtils';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<User>({ mode: "onChange" });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (data: User) => {
    if (!checkSignInEmail(data.email)) {
      setError('email', {
        type: 'manual',
        message: 'Пользователь с таким Email не зарегистрирован'
      });
    } else if (!checkSignInPassword(data)) {
      setError('password', {
        type: 'manual',
        message: 'Неверный пароль'
      });
    } else {
      dispatch(signIn(data.email));
      navigate('/');
    }
  };

  return (
    <main className="content container">
      <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <h2 className="form__title">
          Вход
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
          Войти
        </button>

        <span className="form__text">
          Еще не зарегистрированы? <Link className="form__link" to={'/signup'}>Регистрация</Link>
        </span>
      </form>
    </main>
  );
};
