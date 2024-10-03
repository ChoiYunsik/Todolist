import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/input/style';
import BasicButton from './../../components/button/BasicButton';
import S from './style';
// react-hook-form

const SignUp = () => {
    //console.log(useForm());
    const { register, handleSubmit, getValues, formState : {isSubmitted, isSubmitting, errors }} = useForm({mode : "onChange"});

    // 정규식
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;


    return (
        <S.Form onSubmit={handleSubmit((data)=>{
            console.log(data)
        })}>

            {/* 이메일 검증 로직 */}
            <S.Label>
                <S.Title>Email</S.Title>
                <Input size={"full"} shape={"small"} variant={"skyBlue"} color={"black"} 
                type="text" className='BasicInput' 
                id='email'
                name='email'
                placeholder='Enter your email'

                // react-hook-form
                {...register("email", {
                    required : true,
                    pattern : {
                        value : emailRegex,
                    }
                })}
                />
                {errors?.email?.type === 'required' && (
                    <S.ConfirmMessage>Please enter your email</S.ConfirmMessage>
                )}
                {errors?.email?.type === 'pattern' && (
                    <S.ConfirmMessage>Enter it in the format of an email</S.ConfirmMessage>
                )}
            </S.Label>

            {/* 비밀번호 검증 로직 */}
            <S.Label>
                <S.Title>Password</S.Title>
                <Input size={"full"} shape={"small"} variant={"skyBlue"} color={"black"} 
                type="password" className='BasicInput' 
                id='password'
                name='password'
                placeholder='Enter your password'

                // react-hook-form
                {...register("password", {
                    required : true,
                    pattern : {
                        value : passwordRegex,
                    }
                })}
                />
                {errors?.password?.type === 'required' && (
                    <S.ConfirmMessage>Please enter your password</S.ConfirmMessage>
                )}
                {errors?.password?.type === 'pattern' && (
                    <S.ConfirmMessage>It must be at least 8 characters long and include at least one lowercase letter, one number, and one special character (only *!@# are allowed)</S.ConfirmMessage>
                )}
            </S.Label>

            {/* 비밀번호 확인 */}
            <S.Label>
                <S.Title>Password</S.Title>
                <Input size={"full"} shape={"small"} variant={"skyBlue"} color={"black"} 
                type="password" className='BasicInput' 
                placeholder='Please re-enter your password'

                // react-hook-form
                {...register("passwordConfirm", {
                    required : true,
                    validate : {
                        matchPassword : (value) =>{
                            const { password } = getValues();
                            let isMatch = password == value;
                            console.log(value, password, isMatch);
                            return isMatch;

                        }
                    }
                })}
                />
                {errors?.passwordConfirm && (
                    <S.ConfirmMessage>Please confirm your password</S.ConfirmMessage>
                )}
            </S.Label>
            <BasicButton size={"full"} shape={"small"} variant={"blue"} color={"white"}>Sign Up</BasicButton>
        </S.Form >
    );
};

export default SignUp;