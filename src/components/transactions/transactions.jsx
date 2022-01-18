import React, {useState, useEffect} from "react";
import axios from "axios";
function Transactions() {
    const [transactions, setTransactions] = useState([]);
 
    const query= `{ 
        expenses {
        id,
        date,
        category,
        amount,
        type,
        }
    }`;

    useEffect(() => {
        axios ({
          url: '/graphql',
          method: 'post',
          data: {
            query,
          }
        }).then((result) => {
          setTransactions(result.data.data.expenses);
        });
      }, []);

      const getIcon = (category) => {
        let icon;
        switch(category) {
          case 'entertainment':
            icon = 'birthday-cake';
            break;
          case 'food':
            icon = 'pizza-slice';
            break;
          case 'bills':
            icon = 'home';
            break;
          case 'clothes':
            icon = 'tshirt';
            break;
          case 'cosmetics':
            icon = 'bath';
            break;
          case 'health':
            icon = 'first-aid';
            break;
          case 'electronics':
            icon = 'tv';
            break;
          case 'commuting': 
            icon = 'car-side';
            break;
          case 'freelance':
            icon = 'laptop-code';
            break;
          case 'salary':
            icon = 'wallet';
            break;
          case 'passive':
            icon = 'money-check-alt';
            break;
          default:
        }
        return icon;
      }
    
    return(
        <div className="transactions section">
            <div className="card has-table has-mobile-sort-spaced">
                <header className="card-header">
                    <p className="card-header-title">
                        Transaction History
                    </p>
                </header>
                <body>
                    <div className="card-content">
                        <div className="table-wrapper has-mobile-cards">
                            <table className="table is-stripped is-hoverable">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Amount</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {transactions.map((item) => (
                                    <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td><span className={`${item.type === 'incoming' ? 'tag is-success' : 'tag is-danger'}`}>{item.type === 'incoming' ? '' : '-'} {item.amount} $</span></td>
                                    <td>
                                    <td><i className={`fas fa-${getIcon(item.category)}`}></i> {item.category}</td>
                                    </td>
                                    <td>{item.date}</td>
                                    </tr>  
                                ))}  
                            </tbody>
                            </table>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    )
}

export default Transactions;