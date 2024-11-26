document.getElementById('loanForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const loanAmount = Number(document.getElementById('loanAmount').value);
    const interestRate = Number(document.getElementById('interestRate').value) / 100;
    const loanTerm = Number(document.getElementById('loanTerm').value);
    const monthlyRate = interestRate / 12;
    const totalPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalPayments));
    document.getElementById('result').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
});
