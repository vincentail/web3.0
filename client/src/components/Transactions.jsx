import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({key,id,url,message,timestamp,addressFrom,addressTo,amount}) => {
    return (
        <div className='bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w[500px] sm:min-w-[270px] sm:max-w[300px] flex-col p-3 rounded-md hover:shadow-2xl text-white'>
            <div className='flex flex-col items-center w-full mt-3'>
                <div className='display-flex justify-start w-full mb-6 p-2'>
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel='noopener noreferrer'>
                        <p className='text-white text-base'>From:{shortenAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel='noopener noreferrer'>
                        <p className='text-white text-base'>From:{shortenAddress(addressTo)}</p>
                    </a>
                    <p className='text-white text-base'>Amount:{amount} ETH</p>
                    <p className='text-white text-base'>
                        {message && (
                            <>
                            <br/>
                            <p className='text-white text-base'>Message:{message}</p>
                            </>
                        )}
                    </p>

                    <div className='bg-black p-3 px-3 w-max rounded-3xl -mt-1 shadow-1xl'>
                        <p className='text-[#37c7da] font-bold'>{timestamp}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Transactions = () => {
    const { currentAccount } = useContext(TransactionContext);

    return (
        <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
            <div className='flex flex-col md:p-12 py-12 px-4'>
                {currentAccount ?
                    (<h3 className='text-black text-3xl text-center my-2'>latest connection:{shortenAddress(currentAccount)}</h3>)
                    : (<h3 className='text-black text-3xl text-center my-2'> connected your account to see the transactions</h3>)
                }
                <div className='flex flex-wrap justify-center items-center'>
                    {dummyData.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Transactions;