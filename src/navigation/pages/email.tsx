/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import '../../styles/email.styles.scss';
import { saveData } from '../../utils/saveData';

const Email: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const emailSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: emailSchema,
    onSubmit: (value) => {
      const data = {
        order: 6,
        title: t('6.title'),
        type: t('6.type'),
        answer: value.email,
      };

      saveData(data);

      navigate('/thank-you');
    },
  });

  return (
    <div>
      <div className="email__container-text">
        <h2 className="email__title">{t('6.title')}</h2>
        <p className="email__description">{t('6.description')}</p>
      </div>

      <form className="email__form" onSubmit={formik.handleSubmit}>
        <label>
          <input
            name="email"
            type="email"
            placeholder={t('6.placeholder')}
            className="email__input"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.email && formik.errors.email ? (
            <div className="email__error">{formik.errors.email}</div>
          ) : null}
        </label>

        <p className="email__privacy">{t('privacy-policy')}</p>

        <Button type="submit" title={t('button-next')} handleDataManagment={() => {}} />
      </form>
    </div>
  );
};

export default Email;
