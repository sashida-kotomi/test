import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
　
const ValidationHooks: React.FC = () => {
　
    interface SelectIds {
        id: number;
        label: string;
    }
　
    interface FormData {
        sampleText: string;
        sampleSelect: number;
    }
　
    const selectIds: SelectIds[] = [
        {id:1, label: 'a'},
        {id:2, label: 'b'},
        {id:3, label: 'c'},
    ];
　
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        mode: 'onChange',
        defaultValues: {
            sampleText: '',
            sampleSelect: 1
        },
    });
　
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        console.log(errors);
    };
　
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>sampleText: </label>
                <input {...register('sampleText', {
                    required: 'sampleTextは必須です。',
                    pattern: { value: /^[0-9a-zA-Z]+$/, message: 'sampleTextは半額英数字で入力してください。'},
                })} />
                <p style={{color: 'red'}}>{errors?.sampleText?.message}</p>
            </div>
            <div>
                <label>sampleSelect: </label>
                <select {...register('sampleSelect', {
                    required: 'sampleSelectは必須です。',
                    validate: {
                        oneOf: (v:number) => selectIds.map( (row) => row.id).indexOf(Number(v)) !== -1 ? undefined : 'sampleSelectは指定された値を入れてください'
                    },
                })} >
                    {selectIds.map( (row: SelectIds) =>
                        <option key={row.id} value={row.id}>{row.label}</option>
                    )}
                    <option value={4}>d</option>
                </select>
                <p style={{color: 'red'}}>{errors?.sampleSelect?.message}</p>
            </div>
            <button type='submit'>送信</button>
        </form>
    );
};
　
export default ValidationHooks;