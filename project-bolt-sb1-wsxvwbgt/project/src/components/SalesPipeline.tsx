import React from 'react';
import { motion } from 'framer-motion';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Deal } from '../types';
import { mockDeals } from '../data/mockData';
import { DollarSign, Calendar, TrendingUp } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const stages = [
  { id: 'prospecting', title: 'Prospecting', color: 'bg-slate-500' },
  { id: 'qualification', title: 'Qualification', color: 'bg-blue-500' },
  { id: 'proposal', title: 'Proposal', color: 'bg-yellow-500' },
  { id: 'negotiation', title: 'Negotiation', color: 'bg-orange-500' },
  { id: 'closed-won', title: 'Closed Won', color: 'bg-emerald-500' },
  { id: 'closed-lost', title: 'Closed Lost', color: 'bg-red-500' }
];

export function SalesPipeline() {
  const [deals, setDeals] = React.useState(mockDeals);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedDeals = deals.map(deal => 
      deal.id === result.draggableId 
        ? { ...deal, stage: result.destination.droppableId }
        : deal
    );
    setDeals(updatedDeals);
  };

  const getDealsByStage = (stageId: string) => {
    return deals.filter(deal => deal.stage === stageId);
  };

  const getStageValue = (stageId: string) => {
    return getDealsByStage(stageId).reduce((sum, deal) => sum + deal.value, 0);
  };

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Sales Pipeline</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">
            Drag and drop deals to update their stage
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-slate-600 dark:text-slate-400">Total Pipeline Value</p>
            <p className="text-2xl font-bold text-emerald-500">
              ${deals.reduce((sum, deal) => sum + deal.value, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </motion.div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {stages.map((stage, stageIndex) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: stageIndex * 0.1 }}
              className="min-w-80 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{stage.title}</h3>
                  <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-lg text-xs font-medium">
                    {getDealsByStage(stage.id).length}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Total Value</p>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    ${getStageValue(stage.id).toLocaleString()}
                  </p>
                </div>
              </div>

              <Droppable droppableId={stage.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="space-y-3 min-h-96"
                  >
                    {getDealsByStage(stage.id).map((deal, dealIndex) => (
                      <Draggable key={deal.id} draggableId={deal.id} index={dealIndex}>
                        {(provided, snapshot) => (
                          <motion.div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            whileHover={{ scale: 1.02 }}
                            className={`bg-white dark:bg-slate-700 rounded-xl p-4 shadow-md border border-slate-200 dark:border-slate-600 transition-all duration-200 ${
                              snapshot.isDragging ? 'rotate-3 shadow-xl' : ''
                            }`}
                          >
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                              {deal.title}
                            </h4>
                            
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                <DollarSign className="w-4 h-4 mr-2" />
                                ${deal.value.toLocaleString()}
                              </div>
                              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                <TrendingUp className="w-4 h-4 mr-2" />
                                {deal.probability}% probability
                              </div>
                              <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                <Calendar className="w-4 h-4 mr-2" />
                                Due {formatDistanceToNow(deal.expectedCloseDate, { addSuffix: true })}
                              </div>
                            </div>

                            <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mb-3">
                              <div
                                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${deal.probability}%` }}
                              ></div>
                            </div>

                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                              {deal.notes}
                            </p>
                          </motion.div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </motion.div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}