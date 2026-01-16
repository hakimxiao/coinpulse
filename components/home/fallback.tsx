import React from 'react';
import DataTable from '@/components/DataTable';
import { cn } from '@/lib/utils';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2 mt-2">
        <div className="header-image skeleton" />
        <div className="info">
          <div className="header-line-sm skeleton" />
          <div className="header-line-lg skeleton" />
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="period-button-skeleton skeleton" />
        ))}
      </div>

      <div className="chart">
        <div className="chart-skeleton skeleton" />
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const columns: DataTableColumn<number>[] = [
    {
      header: 'Name',
      cell: () => (
        <div className="name-link">
          <div className="name-image skeleton" />
          <div className="name-line skeleton" />
        </div>
      ),
    },
    {
      header: '24 Change',
      cell: () => (
        <div className="change-cell">
          <div className="price-change">
            <div className="change-icon skeleton" />
            <div className="change-line skeleton" />
          </div>
        </div>
      ),
    },
    {
      header: 'Price',
      cell: () => (
        <div className="price-cell">
          <div className="price-line skeleton" />
        </div>
      ),
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <div className="trending-coins-table">
        <DataTable
          data={[1, 2, 3, 4, 5, 6]}
          columns={columns}
          rowKey={(i) => i}
          tableClassName="trending-coins-table"
          headerCellClassName="py-3!"
          bodyCellClassName="py-2!"
        />
      </div>
    </div>
  );
};
