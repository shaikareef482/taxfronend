import React from "react";
import Copy from "./Copy";

interface AccountProps {
  account: {
    appwriteItemId: string;
    name: string;
    currentBalance: number;
    mask: string;
    sharaebleId: string;
  };
  userName: string;
  showBalance: boolean;
  formatAmount: (amount: number) => string;
}

const Bankcard = ({ account, userName, showBalance, formatAmount }: AccountProps) => {
  return (
    <div className="d-flex flex-column">
      <a
        href={`/transaction-history/?id=${account.appwriteItemId}`}
        className="bank-card d-flex flex-column p-3 position-relative text-white bg-primary rounded shadow"
      >
        {/* Card Content */}
        <div className="bank-card_content d-flex justify-content-between">
          <div>
            <h1 className="fs-5 fw-semibold">{account.name}</h1>
            <p className="fw-bold fs-4">{formatAmount(account.currentBalance)}</p>
          </div>

          <article className="d-flex flex-column gap-2">
            {/* User and Bank Info */}
            <div className="d-flex justify-content-between">
              <h1 className="fs-6 fw-semibold">{userName}</h1>
              <h2 className="fs-6 fw-semibold">●● / ●●</h2>
            </div>
            <p className="fs-6 fw-semibold text-uppercase">
              ●●●● ●●●● ●●●● <span className="fs-5">{account?.mask}</span>
            </p>
          </article>
        </div>

        {/* Card Icons */}
        <div className="bank-card_icon d-flex mt-3">
          <img src="/icons/Paypass.svg" width={20} height={24} alt="pay" />
          <img
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ms-3"
          />
        </div>

        {/* Background Image */}
        <img
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="position-absolute top-0 start-0"
        />
      </a>

      {/* Copy Component */}
      {showBalance && <Copy title={account?.sharaebleId} />}
    </div>
  );
};

export default Bankcard;