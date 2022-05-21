import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction) private transactionModel: typeof Transaction,
  ) {}
  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionModel.create({
      payment_date: '2021-01-01',
      name: 'Nova conta 1',
      description: 'Descrição',
      category: 'category1',
      amount: 30,
      type: 'debit',
    });
    // this.transactionModel.create(createTransactionDto);
  }

  findAll() {
    return this.transactionModel.findAll();
  }
}
