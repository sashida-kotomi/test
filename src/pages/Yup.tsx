import React from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {FieldValues} from "react-hook-form/dist/types/fields";
　
const ValidationHooksYup: React.FC = () => {
　
    interface SelectIds {
        id: number;
        label: string;
    }
　
    interface FormData extends FieldValues {
        sampleText: string;
        sampleSelect: number;
    }
　
    const selectIds: SelectIds[] = [
        {id:1, label: 'a'},
        {id:2, label: 'b'},
        {id:3, label: 'c'},
    ];
　
    const validationSchema = yup.object().shape({
        sampleText: yup
            .string()
            .matches(/^[0-9a-zA-Z]+$/, 'sampleTextは半額英数字で入力してください。')
            .required('sampleTextは必須です。'),
        sampleSelect: yup
            .number()
            .oneOf(selectIds.map( (row) => row.id), 'sampleSelectは指定された値を入れてください。')
            .required('sampleTextは必須です。'),
    })
　
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        mode: 'onChange',
        defaultValues: {
            sampleText: '',
            sampleSelect: 1
        },
        resolver: yupResolver(validationSchema),
    });
　
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        console.log(errors);
    };
    return (
        <form name="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name='sampleText'
                render={({ field }) => (
                    <>
                        <label>sampleText: </label>
                        <input type='text' value={field.value} onChange={field.onChange}></input>
                        <p style={{color: 'red'}}>{errors?.sampleText?.message}</p>
                    </>
                )}
            />
            <Controller
                control={control}
                name='sampleSelect'
                render={({ field }) => (
                    <>
                        <label>sampleSelect: </label>
                        <select onChange={field.onChange}>
                            {selectIds.map( (row: SelectIds) =>
                                <option key={row.id} value={row.id}>{row.label}</option>
                            )}
                            <option value={4}>d</option>
                        </select>
                        <p style={{color: 'red'}}>{errors?.sampleSelect?.message ?? null}</p>
                    </>
                )}
            />
            <button type='submit'>送信</button>
        </form>
    );
};
　
export default ValidationHooksYup;