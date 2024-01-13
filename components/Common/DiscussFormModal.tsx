import Modal from '@/components/Common/UI/Modal';
import { useContext, useEffect, useState } from 'react';
import { DiscussFormVisibilityContext } from '@/components/Common/Contexts/DiscussFormVisibility';
import { motion } from 'framer-motion';
import Title from '@/components/Common/UI/Title';
import { useForm } from 'react-hook-form';
import Button from '@/components/Common/UI/Button';
import { Input, TextArea } from '@/components/Common/UI/Input';
import FormItem from './UI/FormItem';
import Radio from '@/components/Common/UI/Radio';
import Switch from '@/components/Common/UI/Switch';
import RadioPaymentsTermList, { IPaymentTerm } from '@/components/Common/UI/RadioPaymentsTermList';
import CloseSvg from '@/components/Common/UI/svg/close';
import usePageTranslation from '@/core/hooks/UsePageTranslation';
import { DictionaryKey, TCommonDictionary, TModalsDictionary } from '@/core/lib/i18n';

type TDiscussFormModalDictionaries = TModalsDictionary & TCommonDictionary
const DiscussFormModal = () => {
  const {t, locale} = usePageTranslation<TDiscussFormModalDictionaries>(DictionaryKey.Modals, DictionaryKey.Common)
  const { isVisibleDiscussForm, setIsVisibleDiscussForm } = useContext(DiscussFormVisibilityContext);
  const {
    reset,
    getValues,
    setValue,
    watch,
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();
  const paymentTermLater = watch('paymentTermLater');
  const paymentTerm = watch('paymentTerm');
  const budget = watch('budget');
  const [isThanksWindowOpen, setIsThanksWindowOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const budgetItems = t.modals.discussFormBudgetItems;
  const paymentsTermsItems: IPaymentTerm[] = t.modals.paymentsTermsItems
  const setDefaultValues = () => {
    setValue('paymentTerm', paymentsTermsItems[0].name);
    setValue('paymentTermLater', false);
    setValue('budget', budgetItems[0]);
  };

  useEffect(() => {
    setDefaultValues();
  }, []);

  useEffect(() => {
    clearErrors()
  }, [locale])

  useEffect(() => {
    setValue('paymentTerm', paymentsTermsItems[0].name);
    setValue('budget', budgetItems[0]);
  }, [locale])

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsThanksWindowOpen(false);
        setIsVisibleDiscussForm(false);
        reset();
        setDefaultValues();
        setIsSuccess(false);
      }, 2500);
    }
    if (isError) {
      setTimeout(() => {
        setIsThanksWindowOpen(false);
        setIsError(false);
      }, 2500);
    }
  }, [isSuccess, isError]);
  const onSubmit = async () => {
    const data = getValues();
    setIsThanksWindowOpen(true);
    try {
      const response = await fetch('/api/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
      console.error('Произошла ошибка:', error);
    }
  };

  const variants = {
    initial: {
      y: '100vh',
    },
    animate: {
      y: 0,
      transition: {
        y: {
          type: 'spring',
          bounce: 0.4,
          duration: 0.8,
        },
      },
    },
    exit: {
      y: '100vh',
      transition: {
        duration: 0.4,
      },
    },
  };

  const thanksVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <Modal open={isVisibleDiscussForm} setClose={() => setIsVisibleDiscussForm(false)} childrenAlign={'end'}>
      <div className={`large-container large-container-discuss-form`}>
        <motion.div
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          variants={variants}
          className={'discuss-form-modal'}
        >
          <div className={'discuss-form-modal__head'}>
            <h3>{t.modals.headings.discussProject}</h3>
            <button onClick={() => setIsVisibleDiscussForm(false)}>
              <CloseSvg />
            </button>
          </div>
          <div className={'discuss-form-modal__body'}>
            <Title>{t.modals.headings.startYourProject}</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormItem
                name={'projectDescription'}
                label={t.modals.labels.projectDescription}
                register={register}
                errors={errors}
                rules={{ required: t.common.validationMessage.required }}
                className={'discuss-form-modal__form-item-small-wrp'}
              >
                <TextArea
                  placeholder={t.modals.placeholders.projectDescription}
                  rows={5}
                  error={!!errors['projectDescription']}
                />
              </FormItem>
              <FormItem
                name={'projectExpectations'}
                label={t.modals.labels.projectSuccess}
                register={register}
                errors={errors}
                rules={{ required: t.common.validationMessage.required }}
                className={'discuss-form-modal__form-item-small-wrp'}
              >
                <TextArea
                  placeholder={t.modals.placeholders.projectSuccess}
                  rows={5}
                  error={!!errors['projectExpectations']}
                />
              </FormItem>
              <div>
                <FormItem name={'paymentTerm'} register={register} label={t.modals.labels.paymentTerms}>
                  <RadioPaymentsTermList
                    items={paymentsTermsItems}
                    checkedItem={paymentTerm}
                    onClick={() => setValue('paymentTermLater', false)}
                  />
                </FormItem>
                <div className={'discuss-form-modal__payment-term-later-wrp'}>
                  <span>{t.modals.labels.paymentTermsLater}</span>
                  <FormItem name={'paymentTermLater'} register={register}>
                    <Switch
                      checked={watch('paymentTermLater')}
                      onClick={() => setValue('paymentTerm', paymentTermLater ? paymentsTermsItems[0].name : null)}
                    />
                  </FormItem>
                </div>
              </div>
              <FormItem
                name={'fullName'}
                label={t.modals.labels.whatYourName}
                register={register}
                errors={errors}
                rules={{ required: t.common.validationMessage.required }}
                className={'discuss-form-modal__form-item-small-wrp'}
              >
                <Input placeholder={t.modals.placeholders.enterYourName} error={!!errors['fullName']} />
              </FormItem>
              <FormItem
                name={'phoneNumber'}
                label={t.modals.labels.yourPhoneNumber}
                register={register}
                errors={errors}
                rules={{
                  required: t.common.validationMessage.required,
                  pattern: {
                    value: /^(\+\d{1,2}\s?)?(\d{10})?$/,
                    message: t.common.validationMessage.incorrectPhoneNumber,
                  },
                }}
                className={'discuss-form-modal__form-item-small-wrp'}
              >
                <Input placeholder={t.modals.placeholders.enterYourPhoneNumber} error={!!errors['phoneNumber']} />
              </FormItem>
              <FormItem name={'budget'} label={t.modals.labels.budget} register={register}>
                <Radio items={budgetItems} checkedItem={budget} />
              </FormItem>
              <Button type={'submit'} fullWidth color={'dark'}>
                {t.modals.buttonsLabels.sendRequest}
              </Button>
              <p>{t.modals.common.callBackMessage}</p>
            </form>
          </div>
        </motion.div>
      </div>
      {isThanksWindowOpen && (
        <motion.div
          variants={thanksVariants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          className={'discuss-form-modal-thanks'}
        >
          {!isSuccess && !isError && (
            <motion.h3 variants={thanksVariants} initial={'initial'} animate={'animate'} exit={'exit'}>
              {t.modals.common.sending}
            </motion.h3>
          )}
          {isSuccess && (
            <motion.h3 variants={thanksVariants} initial={'initial'} animate={'animate'} exit={'exit'}>
              {t.modals.thanksMessage.success[0]}
              <br />
              {t.modals.thanksMessage.success[1]}
            </motion.h3>
          )}
          {isError && (
            <motion.h3 variants={thanksVariants} initial={'initial'} animate={'animate'} exit={'exit'}>
              {t.modals.thanksMessage.error[0]}
              <br />
              {t.modals.thanksMessage.error[1]}
            </motion.h3>
          )}
        </motion.div>
      )}
    </Modal>
  );
};

export default DiscussFormModal;
